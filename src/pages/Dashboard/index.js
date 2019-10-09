import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addDays, subDays, format, isAfter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Header from '~/components/Header';

import { Container, Nav, Dates, MeetupList } from './styles';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = format(date, "dd 'de' MMMM", {
    locale: ptBR,
  });

  function nextPage() {
    setDate(addDays(date, 1));
  }

  function prevPage() {
    if (isAfter(date, new Date())) {
      setDate(subDays(date, 1));
    }
  }

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date,
        },
      });

      setMeetups(response.data);
    }
    if (isFocused) {
      loadMeetups();
    }
  }, [date, isFocused]);

  return (
    <Background>
      <Header />

      <Container>
        <Nav>
          <TouchableOpacity onPress={prevPage}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Dates>{dateFormatted}</Dates>
          <TouchableOpacity onPress={nextPage}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </Nav>

        <MeetupList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Meetup data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
