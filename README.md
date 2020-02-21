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