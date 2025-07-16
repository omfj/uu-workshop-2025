export default function Video() {
  return (
    <div>
      <video
        width="600"
        src="videoMedUndertekster.mov"
        controls
        className={"mx-auto"}
      >
        <track default kind="captions" srcLang="en" src="/video-captions-vtt" />
        {/* hint hint: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
