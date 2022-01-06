import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ReactFileReader from 'react-file-reader'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  const handleFiles = files => {
    /* const reader = new FileReader()
    reader.onload = function (e) {
      console.log(reader.result)
    }
    reader.readAsText(files[0])  */
    console.log(files)
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading"> Upload the files here</h1>
          <img
            src="https://res.cloudinary.com/dp7ibjh2t/image/upload/v1641459199/file_tb1swy.jpg"
            alt="get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            You can upload the files here and the type of uploaded files should
            be in json format.We accept only json files now,we will try to
            extend our features coming soon...
          </p>

          <ReactFileReader handleFiles={handleFiles()}>
            <button type="button" className="shop-now-button">
              upload
            </button>
          </ReactFileReader>
        </div>
        <img
          src="https://res.cloudinary.com/dp7ibjh2t/image/upload/v1641459199/file_tb1swy.jpg"
          alt="get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
