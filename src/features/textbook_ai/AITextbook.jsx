import React from 'react'
import PdfViewer from './PdfViewer'
import Chatbot from './Chatbot'

function AITextbook() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
    <PdfViewer />
    <Chatbot />
    </div>
  )
}

export default AITextbook