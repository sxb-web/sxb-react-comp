import React from 'react'
import ReactMarkdown from 'react-markdown'
import "github-markdown-css/github-markdown.css"
export default function MarkDown({file}) {
  return (
    <ReactMarkdown source={file} className="markdown-body" />
  )
}