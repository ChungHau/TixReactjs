import React, { Component } from 'react'
import AppHome from '../components/AppHome'
import CarouselAndSelect from '../components/CarouselAndSelect'
import News from '../components/News'
import Tix from '../components/Tix'

export default class index extends Component {
    render() {
        return (
            <>
                <CarouselAndSelect />
                <Tix />
                <News />
                <AppHome />
            </>
        )
    }
}
