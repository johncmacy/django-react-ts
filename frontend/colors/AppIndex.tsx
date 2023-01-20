import React from 'react'
import JavaScriptComponent from './JavaScriptComponent'

export default function AppIndex({ title }: { title: String }) {
  return (
    <>
      <h1>{title}</h1>
      <p>This is a test</p>
      <a href="/">Yolo</a>

      <JavaScriptComponent color="red" />
      <hr />
      <JavaScriptComponent color="green" />
    </>
  )
}
