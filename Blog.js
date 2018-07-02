function Blog(props){
    const slider = (
          <ul>
            {props.posts.map((posts) =>
             <li key={posts.id}>
               {posts.title}
             </li>)}
          </ul>
    );
    const content = props.posts.map((posts)=>
        <div key={posts.id}>
           <h3>{posts.title}</h3>
           <p>{posts.content}</p>
        </div>
    );
    return (
     <div>
      {slider}
      <hr />
      {content}
     </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Welcom to learn React', content: 'This is my first React Blog'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  
  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
  );
