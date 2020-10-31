import { increment, decrement } from './actions';
import { count } from './react-redux'
import { connect } from 'react-redux';
    
    const Counter = ({ count }) => {
        return (
            <div>
                <button className="increment" onClick={increment}>Increment</button>
                <button className="decrement" onClick={decrement}>Decrement</button>
                Current Count: <span>{this.props.count}</span>
            </div>
        );
    };

    const mapStateToProps = state => {
      return { count: state.count }
    }
    
    export const WrappedCounter = connect(mapStateToProps)(Counter);
    
    // Only change code *before* me!
    // -----------
    
  

   