import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import Grid from './Grid'

export default function Home({ user, onShowAccount }){
    return (
        <div>
            <Navbar name={user.name} onShowAccount={onShowAccount} />
            <Banner />
            <Grid title='Trending' fetchUrl='https://api.themoviedb.org/3/trending/movie/week?api_key=9163c50c4bc90c6bfaa703c8ea383a1e'></Grid>
            <Row title='Netflix Originals' fetchUrl='https://api.themoviedb.org/3/discover/tv?api_key=9163c50c4bc90c6bfaa703c8ea383a1e'></Row>
            <Row title='top Rated' fetchUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=9163c50c4bc90c6bfaa703c8ea383a1e'></Row>
        </div>
    )
}