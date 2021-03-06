import React, { Component, createContext } from 'react'

const SongContext = createContext();

export const SongConsumer = SongContext.Consumer;

export class SongProvider extends Component {
    state = {
        songs: [
            { id: 0, title: "Still Don't Know", artist: "Icona Pop", duration: "3:16" },
            { id: 1, title: "I Love It ", artist: "Icona Pop", duration: "2:35" },
            { id: 2, title: "Girlfriend", artist: "Icona Pop", duration: "2:50" },
            { id: 3, title: "We Got The World", artist: "Icona Pop", duration: "3:07" },
            { id: 4, title: "Nights Like This", artist: "Icona Pop", duration: "3:24" },
            { id: 5, title: "Comfortably Numb", artist: "Pink Floyd", duration: "3:07" },
            { id: 6, title: "Dancing In The Moonlight", artist: "Thin Lizzy", duration: "3:07" },
            { id: 7, title: "Whole Lotta Love", artist: "Led Zeppelin", duration: "3:07" },
        ],
        songId: 0,
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