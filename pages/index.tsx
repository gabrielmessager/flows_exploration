import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';
import { registerUser, userCreatedSubscription } from '../mutations/User';
// import { getDataFromTree } from '@apollo/react-ssr';

const Text = styled.span`
  font-size: 40px;
  color: black;
`;

// const App = (props: Props) => <Text>The response from the server is: {props.name}</Text>

// App.getInitialProps = async () => {
//   const response = await axios.post(`http://localhost:4000/graphql`, {
//     query
//   });

//   return { ...response?.data?.data?.register };
// };



const Index = (props: Object) => {
  const [onChange, setOnChange] = useState('');
  const [ register, data ] = useMutation(registerUser);
  const { data: subData, loading } = useSubscription(
    userCreatedSubscription,
    { 
      onSubscriptionData: ({ client, subscriptionData }) => {
        console.log('subscriptionData', subscriptionData)
        // Optional callback which provides you access to the new subscription
        // data and the Apollo client. You can use methods of the client to update
        // the Apollo cache:
        // https://www.apollographql.com/docs/react/advanced/caching.html#direct
      }
    }
  );

  console.log('subData', subData);
  // console.log('name', name)


  if (!data.loading && data?.data?.register?.name) {
    return <Text>{data?.data?.register?.name}</Text>;
  }

  if (data.error) {
    return <Text>Something went wrong</Text>;
  }

  console.log('onChange', onChange)

  return (
    <>
      <input onChange={(evt) => setOnChange(evt.target.value)} value={onChange} />
      <button
        onClick={() => {
          register({
            variables: {
              firstName: "paulo",
              lastName: "test2",
              email: onChange,
              password: "hello",
            }
          });
        }}
      >
        load
      </button>
    </>
  );
};

export default withApollo(Index);

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });