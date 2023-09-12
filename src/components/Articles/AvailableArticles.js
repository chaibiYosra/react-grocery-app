import Article from './Article/Article';
import classes from './AvailableArticles.module.css';
const ARTICLES = [
    {
        id: 'a1',
        name: 'Lemons',
        description: '2lb bag',
        price: 6.97,
        imageName: 'lemons.jpg'
    },
    {
        id: 'a2',
        name: 'Rasberries',
        description: '170g',
        price: 2.97,
        imageName: 'rasberries.jpg'
    },
    {
        id: 'a3',
        name: 'Garlic',
        description: '1 kg pack',
        price: 6.27,
        imageName: 'garlic.jpg'
    },
    {
        id: 'a4',
        name: 'Green grapes',
        description: '2 lb Bag',
        price: 7.97,
        imageName: 'green_grapes.jpg'
    },
    {
        id: 'a5',
        name: 'Avocado',
        description: 'Pack of 5',
        price: 3.92,
        imageName: 'avocado.jpg'
    },
    {
        id: 'a6',
        name: 'Peaches',
        description: '0.11 - 0.14 kg',
        price: 0.75,
        imageName: 'peaches.jpg'
    },
    {
        id: 'a7',
        name: 'Blueberries',
        description: '6 oz',
        price: 4.97,
        imageName: 'blueberries.jpg'
    },
    {
        id: 'a8',
        name: 'Cilantro',
        description: 'sold in bunches',
        price: 1.27,
        imageName: 'cilantro.jpg'
    },
    {
        id: 'a9',
        name: 'Potato',
        description: '10lb',
        price: 5.98,
        imageName: 'potato.jpg'
    },
];
const AvailableArticles = () => {
    const articlesList = ARTICLES.map(article => <Article id={article.id} key={article.id} name={article.name} description={article.description} price={article.price} imageName={article.imageName}/>);

    return <section className={classes.articles}>
        <div>
            <ul>
                {articlesList}
            </ul>
        </div>
    </section>
}

export default AvailableArticles;