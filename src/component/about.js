import Link3 from "../router/link";
import A from '../image/about_cake2.jpg'
import B from '../image/abt_cake1.jpg'
import C from '../image/about_cake3.jpeg'
import D from '../image/about_cake4.jpg'
import E from '../image/services_img1.png'
import F from '../image/services_img2.jpg'
function About() {
    return (
        <>
            <div>
                <Link3 />
            </div>
            <div className="about_bg"> 
            </div>
            <div className="abt">
                <h1>About Us</h1>
            </div>
            <div className="about1">
                <h1>About Us</h1>
            </div>
           


    
    <div className="about_gal">
                <div className="ab1">
                    <img className="about_img1" src={A} />
                </div>
                <div className="ab1">
                    <img className="about_img1" src={B} />
                </div>
     </div>
            <div className="about_gal">
                <div className="ab1">
                    <img className="about_img2" src={C} />
                </div>
                <div className="ab1">
                    <img className="about_img2" src={D} />
                </div>
            </div>

            <div className="abt_3">
<p>Cake, a beloved dessert, has evolved from ancient honey-sweetened bread to the diverse and delicious varieties we enjoy today. Key types include butter cakes, sponge cakes, chiffon cakes, and cheesecakes, each known for unique textures and flavors. Popular flavors like chocolate, carrot, red velvet, and lemon highlight the versatility of cake. Traditionally, cakes play a central role in celebrations such as birthdays and weddings, often featuring elaborate decorations. Ingredients typically include flour, sugar, eggs, butter or oil, and leavening agents, with careful baking techniques ensuring the perfect texture.

Special occasion cakes, such as multi-tiered wedding cakes and decorated birthday cakes, add joy to festivities. Dietary adaptations like gluten-free, vegan, and keto cakes cater to diverse needs, using alternative ingredients like almond flour, flax eggs, and natural sweeteners. Cultural significance is also strong, with specific cakes marking holidays and festivals worldwide. Cakes symbolize celebration and togetherness, making them a cherished part of many culinary traditions. Special occasion cakes, such as multi-tiered wedding cakes and decorated birthday cakes, add joy to festivities. Dietary adaptations like gluten-free, vegan, and keto cakes cater to diverse needs, using alternative ingredients like almond flour, flax eggs, and natural sweeteners.</p>

            </div>
            <div className="about1">
                <h1>Our Services</h1>
            </div>  
<div className="services">
<div className="services1"><img className="s1" src={F} /></div>
 <div className="services2"><img className="s1" src={E} /> </div>

</div>

         

<div class="container">
        <h1>Our Services</h1>
        <div class="service">
            <h2>Custom Cake Orders!</h2>
            <p>Allow customers to place orders for custom-designed cakes for various occasions such as birthdays, weddings, anniversaries, etc.</p>
        </div>
        <div class="service">
            <h2>Cake Decorating Classes</h2>
            <p>Host workshops or classes where customers can learn cake decorating techniques from professionals.</p>
        </div>
        <div class="service">
            <h2>Cake Decorating Supplies</h2>
            <p> Sell cake decorating supplies and tools for customers who enjoy decorating cakes at home.</p>
        </div>
        
    </div>


 
     
        </>
    );
}

export default About;
