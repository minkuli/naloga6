import React from 'react';
// import dummy from './dummy_product.jpeg';
// import InfiniteScroll from "react-infinite-scroller";
import Product from './Product';


class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            per: 4,
            page: 1,
            totalPages: null,
            scrolling: false
        }
    }

    componentDidMount = () => {
        this.loadProducts();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e);
        })
    }

    handleScroll = (e) => {
        const { scrolling, totalPages, page } = this.state;
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            this.loadProducts();
        }
    }

    loadProducts = () => {
        const { products, per, page } = this.state;
        fetch(`./products.json`,
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: [...products, ...json.products],
                })
            })
    }

    loadMore = () => {
        this.setState(() => ({
            per: 4
        }), this.loadProducts)
    }

    render() {
        console.log(this.state.products);
        return (
            <div>
                <section className="ph3 ph5-ns pv5">
                    <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
                        <div className="dt-ns w-100">
                            <div className="pa3 pa4-ns dtc-ns v-mid">
                                <div>
                                    <h2 className="fw4 blue mt0 mb3">Banner</h2>
                                    <h2 className="fw4 blue mt0 mb3">Banner</h2>
                                    <h2 className="fw4 blue mt0 mb3">Banner</h2>

                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                {/* <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={true || false}
                    useWindow={false}
                    loader={
                        <div>
                            Loading ...
          </div>
                    }
                > */}
                <div className="mw5 mw7-ns center flex flex-wrap flex-row-l flex-column  pa5-ns">
                    {
                        this.state.products.map(product => <Product {...product} />)
                    }
                    <a onClick={this.loadProducts}>Load more products</a>
                </div>
                {/* </InfiniteScroll> */}

            </div>
        );
    }
}

export default Content;