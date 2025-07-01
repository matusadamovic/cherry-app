import { useRef } from 'react'

// Placeholder for WebRTC setup
export default function VideoChat() {
  const localVideo = useRef(null)
  const remoteVideo = useRef(null)

  // TODO: implement signaling with Firebase functions

  return (
    <div className="flex flex-col gap-4">
      <video ref={localVideo} autoPlay playsInline className="w-48 h-36 bg-black" />
      <video ref={remoteVideo} autoPlay playsInline className="w-48 h-36 bg-black" />
    </div>
  )
}
