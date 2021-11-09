import React, { useState } from 'react';
import Pmenu from '../Portfolio/Pmenu';
import PortfolioItems from '../Portfolio/PortfolioItems';
import ButtonPortfolio from '../Portfolio/ButtonPortfolio';
import { Helmet } from 'react-helmet';
// for mapping of button 
const allButton = [...new Set(Pmenu.map((currenrElement) => {
    return currenrElement.category
}))]


function Portfolio() {
    const [items, setItems] = useState(Pmenu);
    // button for 
    const [catItems, setCatItems] = useState(allButton);

    const filterItem = (category) => {

        if (category === "ALL") {

            setItems(Pmenu);
            return;
        }



        const updatedItems = Pmenu.filter((currenrElement) => {
            return currenrElement.category === category;
        });
        setItems(updatedItems);
    }

    return (
        <>
            <Helmet>
                <title>Portfolio</title>
                {/* <!-- SEO --> */}
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="React portfolio"
                    content="Portfolio content"
                />
                <meta property="og:title" content="React Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://github.com/taha123618" />
                {/* <!-- SEO End  --> */}
            </Helmet>
            <h1 className="mt-5 text-center main-heading"> PORTFOLIO </h1>
            <br></br>
            <br></br>
            <ButtonPortfolio filterItem={filterItem} catItems={catItems} />
            <PortfolioItems items={items} />
        </>
    )
}

export default Portfolio;
