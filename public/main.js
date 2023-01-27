/* eslint-disable no-undef */
const APP_ID = '8373f2c098bf42b6ac1e19608feee57b';
// const TOKEN =
//   '007eJxTYFjRaxBkO0v+x9QXqVav42f/f/j33YuabUwffj5/eW3JpMBGBYakNBODFANDUyMTCzMTo1QDS4sUEyOT1LQUc2Pz1NQ0i8OvLiU3BDIyfHRpZmRkgEAQn40huCSxJDOZgQEADcIlsg==';
const CHANNEL = 'GroupChat';
const tokenServerBaseUrl = 'http://localhost:8080/access-token';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  role: 'host',
  codec: 'vp8'
});

let localTracks = [];
let remoteUsers = {};

async function getTokenFromTokenServer(channelName, role, uid) {
  const url = `${tokenServerBaseUrl}?channelName=${channelName}&role=${role}&uid=${uid}`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    const { token } = json;
    return token;
  } catch (e) {
    console.log(e, 'error');
  }
}

let joinAndDisplayLocalStream = async () => {
  client.on('user-published', handleUserJoined);

  client.on('user-left', handleUserLeft);

  // call your node token server to generate token

  let token = await getTokenFromTokenServer(CHANNEL, 'publisher', '123');
  console.log(token, CHANNEL, APP_ID);

  let UID = await client.join(APP_ID, CHANNEL, null, null);
  console.log(UID);

  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

  let player = `<div class="video-container" id="user-container-${UID}">
    <div class="video-player" id="user-${UID}"></div>
    </div>`;

  document
    .getElementById('video-streams')
    .insertAdjacentHTML('beforeend', player);

  localTracks[1].play(`user-${UID}`);

  await client.publish([localTracks[0], localTracks[1]]);
};

const joinStream = async () => {
  console.log(client, 'client');
  await joinAndDisplayLocalStream();
  document.getElementById('join-btn').style.display = 'none';
  document.getElementById('stream-controls').style.display = 'flex';
};

let handleUserJoined = async (user, mediaType) => {
  remoteUsers[user.uid] = user;
  await client.subscribe(user, mediaType);

  if (mediaType === 'video') {
    let player = document.getElementById(`user-container-${user.uid}`);
    if (player != null) {
      player.remove();
    }

    player = `<div class="video-container" id="user-container-${user.uid}">
                        <div class="video-player" id="user-${user.uid}"></div> 
                 </div>`;
    document
      .getElementById('video-streams')
      .insertAdjacentHTML('beforeend', player);

    user.videoTrack.play(`user-${user.uid}`);
  }

  if (mediaType === 'audio') {
    user.audioTrack.play();
  }
};

let handleUserLeft = async (user) => {
  delete remoteUsers[user.uid];
  document.getElementById(`user-container-${user.uid}`).remove();
};

let leaveAndRemoveLocalStream = async () => {
  for (let i = 0; localTracks.length > i; i++) {
    localTracks[i].stop();
    localTracks[i].close();
  }

  await client.leave();
  document.getElementById('join-btn').style.display = 'block';
  document.getElementById('stream-controls').style.display = 'none';
  document.getElementById('video-streams').innerHTML = '';
};

let toggleMic = async (e) => {
  if (localTracks[0].muted) {
    await localTracks[0].setMuted(false);
    e.target.innerText = 'Mic on';
    e.target.style.backgroundColor = 'cadetblue';
  } else {
    await localTracks[0].setMuted(true);
    e.target.innerText = 'Mic off';
    e.target.style.backgroundColor = '#EE4B2B';
  }
};

let toggleCamera = async (e) => {
  if (localTracks[1].muted) {
    await localTracks[1].setMuted(false);
    e.target.innerText = 'Camera on';
    e.target.style.backgroundColor = 'cadetblue';
  } else {
    await localTracks[1].setMuted(true);
    e.target.innerText = 'Camera off';
    e.target.style.backgroundColor = '#EE4B2B';
  }
};

document.getElementById('join-btn').addEventListener('click', joinStream);
document
  .getElementById('leave-btn')
  .addEventListener('click', leaveAndRemoveLocalStream);
document.getElementById('mic-btn').addEventListener('click', toggleMic);
document.getElementById('camera-btn').addEventListener('click', toggleCamera);
