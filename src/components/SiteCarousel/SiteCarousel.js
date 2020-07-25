import React from "react";
import "./SiteCarousel.css";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

class SiteCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false
        };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExited = this.onExited.bind(this);
        this.onExiting = this.onExiting.bind(this);
    }

    next() {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === this.props.vehicleData.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    previous() {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.vehicleData.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    goToIndex(newIndex) {
        if (this.state.animating) return;
        this.setState({
            activeIndex: newIndex
        });
    }

    onExiting() {
        this.setState({
            animating: true
        });
    }

    onExited() {
        this.setState({
            animating: false
        });
    }

    render() {
        const slides = this.props.vehicleData.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.detailKey}
                >
                    <a href={`/detail/${item.detailKey}`}>
                        <img src={item.carouselImage} className={"carouselImage"} alt={item.model} />
                        <CarouselCaption captionText="" captionHeader="" />
                    </a>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={slides} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>
        );
    }
}

export default SiteCarousel;