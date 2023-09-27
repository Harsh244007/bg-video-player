const VideoPlayer = () =>{
return (
    <video
        preload="auto"
        className="bgVideo"
        autoPlay
        data-wf-ignore="true"
        data-object-fit="cover"
        loop
        muted
        playsInline
      >
        <source src={"/NatureBG.mp4"} type="video/mp4" /> // add video you can add multiple qualty of same video it will load one based on internet 
        <source src={"/NatureBG.webm"} type="video/webm" />
        <source src={"/NatureBG2.mp4"} type="video/mp4" />
        <source src={"/NatureBG3.mp4"} type="video/mp4" />
      </video>
  )
}
<style>
{`.bgVideo {
  position: fixed;
  width: 100vw;
  transition: all 0.3s;
  object-fit: fill;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  opacity: 0.3;
  /* z-index: 001000;
  opacity: 1; */
}`}  
</style>
