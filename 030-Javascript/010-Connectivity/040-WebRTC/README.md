# WebRTC Example
Web Real-Time Communication enable browser to do peer-to-peer data sharing. Different browser has its own implementation. In this example, adapter.js is used in order to insulate web app from spec change and browser difference.

## API
* MediaStream 
* RTCPeerConnection
* RTCDataChannel

### MediaStream
Get access to data stream.

### RTCPeerConnection
Connection between local and remote peer.

### RTCDataChannel
Network channel for bidirectional peer-to-peer transfer.

## Reference
### SDP (Session Description Protocal)
It is a standard describing a peer-to-peer connection.

## Libraries
* Adaptar.js : https://github.com/webrtc/adapter
There are various implementation of Web RTC. The syntax is quite different, so that adapter.js is required to use in order to use same code in different platform.