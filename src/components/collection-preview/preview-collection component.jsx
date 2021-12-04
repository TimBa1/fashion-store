import "./collection-preview.styles.scss";

import CollectionItem from '../collection-item/collection-item.component';

// const character = data.items.filter((item) => item.mass < 4)

// console.log(character)

const CollectionPreview = ({ data }) => (
  <div className="collection-preview">
    <h1 className="title">{(data?.title).toUpperCase()}</h1>
    <div className='preview'>
            {data.items
        .filter((item, idx) => { idx < 4 })
                .map(({i, ...otheritemprops}) => {
                    return <CollectionItem key={i} {...otheritemprops} />
        })}
    </div>
  </div>
);

export default CollectionPreview;




//{character.mass.filter(() => {})}