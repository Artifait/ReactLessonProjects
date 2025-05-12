
export default function ({ children, fonColor = "gray" }) {
  const myStyle = {
    width: '600px',
    backgroundColor: fonColor,
    padding: "20px",
    border: "2px solid black",
    margin: "10px 0px"
  }

  return <div style={myStyle}>
    {children}
  </div>
}
