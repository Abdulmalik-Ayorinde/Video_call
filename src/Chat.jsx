import { JitsiMeeting } from "@jitsi/react-sdk"
import React from "react"

function Chat() {
	const url = import.meta.env.VITE_APP_DOMAIN
	console.log(url)
	return (
		<JitsiMeeting
			domain={url}
			roomName='GoodRoomName'
			configOverwrite={{
				startWithAudioMuted: true,
				disableModeratorIndicator: true,
				startScreenSharing: true,
				enableEmailInStats: false,
			}}
			interfaceConfigOverwrite={{
				DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
			}}
			userInfo={
				{
					// displayName: "YOUR_USERNAME",
				}
			}
			getIFrameRef={(iframeRef) => {
				iframeRef.style.height = "100vh"
			}}
		/>
	)
}

export default Chat
