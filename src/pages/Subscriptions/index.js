import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import {
  Container,
  SubscriptionList,
  NoSubscriptions,
  NoSubscriptionsText,
} from './styles';

import api from '~/services/api';

import Background from '~/components/Background';
import Subscription from '~/components/Subscription';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedButtonId, setClickedButtonId] = useState(0);

  console.tron.log(subscriptions.length);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('subscriptions');

      const responseFiltered = response.data.map(subscription => ({
        subscription_id: subscription.id,
        meetup: subscription.Meetup,
      }));

      setSubscriptions(responseFiltered);
    }

    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    setLoading(true);
    setClickedButtonId(id);
    await api.delete(`subscription/${id}`);

    setSubscriptions(
      subscriptions.map(subscription =>
        subscription.subscription_id === id
          ? {
              ...subscription,
              canceled_at: new Date(),
            }
          : subscription,
      ),
    );

    setLoading(false);
  }

  return (
    <Background>
      <Header />

      <Container>
        {subscriptions.length > 0 ? (
          <SubscriptionList
            data={subscriptions}
            keyExtractor={item => String(item.subscription_id)}
            renderItem={({ item }) =>
              !item.canceled_at && (
                <Subscription
                  clickedButtonId={clickedButtonId}
                  loading={loading}
                  onCancel={() => handleCancel(item.subscription_id)}
                  data={item}
                />
              )
            }
          />
        ) : (
          <NoSubscriptions>
            <NoSubscriptionsText>Você não tem inscrições</NoSubscriptionsText>
          </NoSubscriptions>
        )}
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
