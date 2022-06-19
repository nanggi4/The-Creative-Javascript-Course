async function displayUser(){
  try{
    const loggedUser = await loginUser('ed', 13485);
    const videos = await getUserVideos(loginUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  }catch(err){
    console.log('We could connect api');
  }
}

displayUser();