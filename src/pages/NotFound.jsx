import { NavLink } from "react-router-dom"


function NotFound() {
  return (
    <div>
      
        <h3>Estas Perdido?</h3>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.getfeedback.com%2Fresources%2Fux%2Ffantastically-funny-404-pages%2F&psig=AOvVaw2_GuvW6kU58XT7piDotmRM&ust=1678037709335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiZ3O3nwv0CFQAAAAAdAAAAABAD" alt="et" width={300}/>
        <br />

        <NavLink to="/">Home</NavLink>

    </div>
  )
}

export default NotFound