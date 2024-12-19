This error occurs when you try to access a component's state or props before it has mounted.  This is often seen when using `this.state` or `this.props` inside the component's constructor or before the `componentDidMount` lifecycle method has completed.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.someProp); // Error! props might be undefined here
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log(this.props.someProp); // This is safe
  }

  render() {
    return <Text>{this.state.count}</Text>;
  }
}
```