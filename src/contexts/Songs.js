import React, { Component, createContext } from 'react'

const SongContext = createContext();

export const SongConsumer = SongContext.Consumer;

export class SongProvider extends Component {
    state = {
        songs: [
            { id: 1, title: "Still Don't Know", artist: "Icona Pop", duration: "3:16" },
            { id: 2, title: "I Love It ", artist: "Icona Pop", duration: "2:35" },
            { id: 3, title: "Girlfriend", artist: "Icona Pop", duration: "2:50" },
            { id: 4, title: "We Got The World", artist: "Icona Pop", duration: "3:07" },
            { id: 5, title: "Nights Like This", artist: "Icona Pop", duration: "3:24" }
        ],
        songId: 1,
        isPaused: false,
        setSongId: (songId) => this.setState({ songId }),
        handleClick: () => this.setState({isPaused: !this.state.isPaused})


    };

    render() {
        return (
            <SongContext.Provider value={this.state}>
                {this.props.children}
            </SongContext.Provider>
        )
    }
}

export function withSongs(Component) {
    function SongAwareComponent(props) {
        return (
            <SongConsumer>
                {
                    propsFromContext => (
                        <Component {...props} {...propsFromContext} />
                    )
                }
            </SongConsumer>
        )
    }

    SongAwareComponent.displayName = `SongAware(${Component.displayName || Component.name || 'Component'})`;

    return SongAwareComponent
}