import { Component } from "react";

class Netflix extends Component {

    render() {
        return (
            <>
                <div className="container">
                </div>

                <div className="navbar">
                    <div class="logo">
                        NETFLIX
                    </div>

                    <div className="links">
                        <button>Log in </button>
                        <button>Sign up </button>
                    </div>
                </div>

                <div className="mainpage">

                    <div className="mainpageContent">
                        <h2>
                            Unlimited movies,TV,shows and more.
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur a</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>

                        <div >
                            <input type="text"  />
                            <button className="getButton">Get started</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Netflix;
 