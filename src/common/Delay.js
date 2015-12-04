import React, {
    Component,
    View,
    ActivityIndicatorIOS,
    InteractionManager
} from 'react-native';

export default class Delay extends Component {
    constructor (props) {
        super(props);
        this.state = {
            content: this.props.loading || (<ActivityIndicatorIOS />)
        };
    }

    setContent () {
        this.setState({
            content: this.props.children
        });
    }

    componentWillMount () {
        if (this.props.time) {
            setTimeout(this.setContent.bind(this), this.props.time);
        } else {
            InteractionManager.runAfterInteractions(this.setContent.bind(this));
        }
        
    }
    render () {
        return (
            <View style={this.props.style}>
                {this.state.content}
            </View>
        )
    }
}