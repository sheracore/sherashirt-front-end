import React from "react";
import ReactAvatarEditor from 'react-avatar-editor'

// import "./styles.css";

class App extends React.Component {
  state = {
    image: 'avatar.jpg',
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    preview: null,
    width: 200,
    height: 200,
  }

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] })
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }

  handlePositionChange = position => {
    this.setState({ position })
  }

  render() {
    return (
      <div>
          <div>
            <ReactAvatarEditor
              scale={parseFloat(this.state.scale)}
              width={this.state.width}
              height={this.state.height}
              position={this.state.position}
              onPositionChange={this.handlePositionChange}
              rotate={parseFloat(this.state.rotate)}
              borderRadius={this.state.width / (100 / this.state.borderRadius)}
              image={this.state.image}
              className="editor-canvas"
            />
          </div>
        <br />
        New File:
        <input name="newImage" type="file" onChange={this.handleNewImage} />
        <br />
        Zoom:
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? '0.1' : '1'}
          max="2"
          step="0.01"
          defaultValue="1"
        />
      </div>
    )
  }
}

export default App


// import React from 'react'
// // import ReactDOM from 'react-dom'
// import example from '../../assets//img/brand/Lion.jpg'


// // import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
// // import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'
// import PhotoEditorUI from 'photoeditorsdk/react-ui'
// import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.ReactUI.css'

// class ApplicationComponent extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state={img: "../../assets/img/brand/example.jpg"}
//     this.pesdk = React.createRef()
//   }

//   componentDidMount () {
//     var ui = this.pesdk.current.ui
//     // You can register event callbacks and access
//     // all SDK function through the ui property
//     ui.on(PhotoEditorUI.Events.EDITOR_READY, () => {
//       var editor = ui.getEditor()
//       var sdk = editor.getSDK()
//     })
//   }

//   render () {
//     return (<PhotoEditorUI.ReactComponent
//       // license='// e.g. '{"owner":"Imgly Inc.","version":"2.1", ...}'
//       assets={{
//         baseUrl: '../../../node_modules/photoeditorsdk/assets'
//       }}
//       editor={{image: example}}
//       style={{
//         width: '100vw',
//         height: '100vh'
//       }} 
//       ref={this.pesdk}
//     />)
//   }
// }

// export default ApplicationComponent;