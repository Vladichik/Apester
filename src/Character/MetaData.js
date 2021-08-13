import React, {Component} from 'react';
// import './App.css';

class MetaData extends Component {
    // Vlad
    // We update the component only in case there is a difference in
    // hp values.
    shouldComponentUpdate(nextProps) {
        return nextProps.hp < this.props.hp;
    }
    render() {
        const {name, hp, nameImg} = this.props;
        const hpBarStyle = {
            position: 'absolute',
            width: '500px',
            height: '20px',
            border: 'solid 2px white',
        };
        const nameStyle = {
            position: 'absolute',
            top: '35px'
        };

        return (
            <div>
                <div style={hpBarStyle}/>
                <div
                    style={{
                        ...hpBarStyle,
                        transition: 'transform 500ms',
                        willChange: 'transform',
                        backgroundColor: 'red',
                        transform: `scaleX(${Math.max(hp / 100, 0)})`,
                        transformOrigin: 'left',
                    }}
                />
                <div
                    style={{
                        ...hpBarStyle,
                        transition: 'transform 300ms',
                        willChange: 'transform',
                        backgroundColor: hp < 100 ? 'yellow' : 'green',
                        transform: `scaleX(${Math.max(hp / 100, 0)})`,
                        transformOrigin: 'left',
                    }}
                />
                <img style={nameStyle} src={nameImg}/>
            </div>
        );
    }
}

export default MetaData;
