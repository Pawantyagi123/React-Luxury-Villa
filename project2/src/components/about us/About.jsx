import About from "../../subComponents/About.jsx"
export default function Aboutus() {
  return (
    <>
    <section id="aboutPage" className="page">
        <div className="container">
            <img src="/public/about (1).jpg" alt="about" />
            <div className="content">
                <h3>Your peace of mind, our priority</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quis beatae iste placeat id, nesciunt esse temporibus numquam praesentium doloremque quia sit, reiciendis blanditiis unde.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil perferendis nulla quidem, totam amet laborum aspernatur impedit, molestiae, quia aliquam repellat perspiciatis accusantium quisquam enim ipsa alias aut? In, nam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo consequatur eligendi.</p>
            </div>
        </div>
        <About/>
    </section>
    </>
  )
}
