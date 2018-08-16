import React, {Component, createContext} from 'react'

const LayoutContext = createContext();

export const LayoutConsumer = LayoutContext.Consumer;

export class LayoutProvider extends Component {

    state = {
        isExpanded: false,

        playlistOn: playlistShowHandler = () => {
            this.setState({isExpanded: true});
        },

       playlistOff: playlistHideHandler = () => {
            this.setState({isExpanded: false});
        }
};


render()
{
    return (
        <LayoutContext.Provider value={this.state}>
            {this.props.children}
        </LayoutContext.Provider>
    )
}
}

export function withLayout(Component) {
    function LayoutAwareComponent(props) {
        return (
            <LayoutConsumer>
                {
                    propsFromContext => (
                        <Component {...props} {...propsFromContext}/>
                    )
                }
            </LayoutConsumer>
        )
    }

    LayoutAwareComponent.displayName = `LayoutAware(${Component.displayName || Component.name || 'Component'})`

    return LayoutAwareComponent
}