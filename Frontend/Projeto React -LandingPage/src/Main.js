function Main () {
    return (

        <div className="main">

            <div className="center">
                <div className="menu">
                    <div className="logo">
                        <h3> sahtcarneiro </h3>
                    </div>
                    <div className="item-menu">
                        <a href="https://www.linkedin.com/in/sahtcarneiro/"> Entre em Contato </a>
                    </div>
                </div>
                <div className="form">
                    <h2> Me dê seu feedback! </h2>
                    <p> esse é meu primeiro contato com react, o que você está achando? </p>
                    <form>
                        <div className="itemsForm">
                            <input placeholder="Seu nome" type="text"></input>
                            <input placeholder="Contato" type="text"></input>
                            <input placeholder="Experiêcia com React" type="text"></input>
                            <input placeholder="O que você está achando?" type="text"></input>
                         <input type="submit"></input>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    )
}

export default Main