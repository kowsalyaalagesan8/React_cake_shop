import Link3 from "../router/link"
import A from '../image/g2.jpg'
import B from '../image/g6.jpg'
import C from '../image/g5.jpg'
function Home3(){
    return(
        <>

        <div>
            <Link3 />
        </div>
         <div className="bg1">
           
        </div>
        <div className="text">
                <h1 className="text1">Fresh & Sweet Cakes !!</h1>
                <p className="text2">Natural and Traditional Cakes ..</p>
                <p className="text3">Explore all the Cakes where each cake is a delightful tale of love and tradition</p>
                <p className="text4">inviting you on a journey of sweet memories and indulgent flavors.</p>
            </div>
        
        <div className="f1">
            <h1 className="h1">Our Goals</h1>

        </div>
        <div className="gallery">
            <div className="card1">
                <img  className="img1"src={A} />
                <div className="content">
                    <h1 className="h1">Fresh Cakes, Fresh Moments!</h1>
                    <p className="p1">Emphasize how freshness enhances every moment, making each cake an opportunity to savor life's sweetness.</p>
                </div>
            </div>
            <div className="card1">
                <img  className="img1"src={B} />
                <div className="content">
                    <h1 className="h1">Freshness, Fast-tracked</h1>
                    <p className="p2"> Speedy delivery ensures cakes maintain their freshness, promising a delightful experience from oven to doorstep.</p>
                </div>
            </div>
            <div className="card1">
                <img  className="img1"src={C} />
                <div className="content">
                    <h1 className="h1">Fresher Bites, Brighter Smiles</h1>
                    <p className="p3">Guaranteeing freshness not only ensures delicious cakes but also brings joy to every bite.</p>
                </div>
            </div>
        </div>

      

        
        </>
      
    )
}


export default Home3