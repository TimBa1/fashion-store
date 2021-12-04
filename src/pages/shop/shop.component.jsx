import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../components/collection-preview/preview-collection component"

function ShopPage() {
    return (
        <div className='shop-page'>
            {
                SHOP_DATA.map(( othercollectionprops, i ) => {
                    return (
                        <CollectionPreview key={i} data ={othercollectionprops}/>
                    )                        
                   
                })
           } 
        </div>
    )
}


export default ShopPage  