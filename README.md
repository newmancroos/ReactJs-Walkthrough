# ReactJs-Walkthrough

<p>
    Creating react application using npm init. Document link 
    https://docs.npmjs.com/cli/init
</p>
<p>
    <strong><u>Life cycle</u></strong>
    <b>There are 6 exitsing life cycle methods in react amount them 3 of them is deprecated  and  2 more new events introduced in new react version.
    </b> <br>
    Below are the list of Existing, Deprecated and New evevnts
    <ul>
        <li>CompponentDrivedStateFromProps(New)</li>
        <li>getSnapshotBeforeUpdate(New)</li>
        <li>ComponentWillMount(Deprecated)</li>
        <li>ComponentDidMount</li>
        <li>ComponentWillReceiveProps(Deprecated)</li>
        <li>ShouldComponentUpdate</li>
        <li>ComponentWillUpdate(Deprecated)</li>
        <li>ComponentWillUnmount</li>
    </ul>
    Below are the life cycle events of reactjs
    <ol>
    <li>
        <u>ComponentDrivedStateFromProps:(New)</u><br>
        it is a static method
        <pre>
            static ComponentDerivedStateFromProps(props, state)
            {
                //return new updated state based upon proprs
            }
        </pre>
    </li>
        <li>
        <u>GetSnapshoutBeforeUpdate:(New)</u><br>
        <pre>
            getSnapshoutBeforeUpdate()
            {
                //create a backup of the current way thing are
            }
        </pre>
    </li>
    <li>
        <u>ComponentWillMount:(Depricated)</u><br>
        <pre>
            componentWillMount()
            {
                //Do something
            }
        </pre>
    </li>
        <li>
            <u>ComponentDidMount:</u> <br>
            This event will fire after component mounted so that we can call any Api to fetch data. It will run only one time
        </li>
        <li>
            <u>ComponentWillReceiveProps:(Depricated)</u> <br>
            This will  run just before receiving props. this event will run when ever props receives from parent. this will have a parameter<br>
            <pre>
                componentWillReceiveProps(nextProps)
                {
                    if(nextProps.whatever != this.props.whatever){
                        //do something here
                    }
                }
            </pre>
            this event is deprecated from version staring 16.3 and from pre-version 17 react team renamed it as <b>UNSAFE_componentWillReceiveProp(nextProps)</b><br>
            once version 17 comes out it will be removed completely
        </li>
        <li>
            <u>ShouldComponentUpdate:</u><br>
            Due to some reason react component will get signal to rerender the component in bg application. this may happen due toslow connection or other external evevnt. in this case developer get a chance to decide wether we really need to update/rerender the component
            <pre>
                shouldComponentUpdate(nextProps, nextSate)
                {
                    //return true   //if we need to update
                    //return false  //if don't want to update
                }
            </pre>
        </li>
        <li>
            <u>ComponentWillUpdate:(Deprecated)</u><br>
            <pre>
                componentWillUpdate(){
                    //Do something
                }
            </pre>
        </li>
        <li>
            <u>ComponentWillUnmount:</u><br>
            Once we are done with the component we have to unmount or disappear from the screen.
            <pre>
                componentWillUnmount()
                {
                    //remove any listener 
                    //teardown or clean your code before your component disappear
                }
            </pre>
        </li>
    </ol>
</p>
<p>
    When we use for and track for control data we use state to store values, and we use controls change, check event to track the value change.
    <pre>
            handleChange(e)
            {
            const {name, value} = e.target;
            this.setState({
                //[e.target.name] : e.target.value
                [name] : value
            })
            }
    </pre>
    as per the above sample we can use common handler to track all the controls values. here e.target has name, vale property, by declaring <b>const {name, value} = e.target</b> value and name of event automatically copied to the variabl ename and value.<br>
    <u>TextArea</u>
    normal textare syntax is &lt;textarea&gt;&lt;/textarea&gt;  but in react we use self closing textare like <br>
    &lt;textarea value="" onChange="handleChange"/&gt; <br>
    <u>Checkbox</u>
    <br>
    <pre>
        &lt;label&gt;
            &lt;input
                name="isMale"  
                type="checkbox" 
                checked={this.state.isMale} 
                onChange={this.handleChange} /&gt;
            Is Male?
        &lt;/label&gt;
    </pre>
    we can modify the change event handler sucha way that handle checked property of the checkbox
    <pre>
        handleChange(e)
            {
            //[e.target.name] : e.target.value
            const {name, value, type, checked} = e.target;
            type === "checkbox" ? 
            this.setState({[name] : checked}) :
            this.setState({[name] : value })
            }
    </pre>
    <u>Radio</u>
    it is more like input ty=e text but it has value property to indicate the value when that radio button select and need to set value to checked property like below
<br/>
    <pre>
     &lt;label&gt;
        &lt;input
        name="gender"  
        type="radio" 
        value="male"
        checked = {this.state.gender === "male"}
        onChange={this.handleChange} /&gt;
        Male
      &lt;/label&gt;
      <br/>
      &lt;label&gt;
        &lt;input
        name="gender"  
        type="radio" 
        value="female"
        checked = {this.state.gender === "female"}
        onChange={this.handleChange} /&gt;
        Female
      &lt;/label&gt;  
      <br/>
      {this.state.gender}  
    </pre>
</p>