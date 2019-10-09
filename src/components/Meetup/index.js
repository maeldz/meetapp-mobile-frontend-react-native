import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  MeetupBanner,
  InfoContainer,
  MeetupTitle,
  DateContainer,
  MeetupDate,
  LocationContainer,
  MeetupLocation,
  OrganizerContainer,
  MeetupOrganizer,
  RegisterButton,
} from './styles';
import api from '~/services/api';

export default function Meetup({ data: meetup }) {
  const dateFormatted = format(
    parseISO(meetup.date),
    "dd 'de' MMMM', ás' H'h'",
    {
      locale: ptBR,
    },
  );

  async function handleRegister() {
    try {
      await api.post(`subscription/${meetup.id}`);
    } catch (err) {
      Alert.alert(
        'Erro na inscrição',
        'Ocorreu um errou na inscrição, tente novamente',
      );
    }
  }

  return (
    <Container>
      <MeetupBanner
        source={{
          uri: meetup.banner.url.replace('localhost', '10.0.2.2'),
        }}
      />
      <InfoContainer>
        <MeetupTitle>{meetup.title}</MeetupTitle>
        <DateContainer>
          <Icon name="event" size={14} color="#999" />
          <MeetupDate>{dateFormatted}</MeetupDate>
        </DateContainer>
        <LocationContainer>
          <Icon name="place" size={14} color="#999" />
          <MeetupLocation>{meetup.location}</MeetupLocation>
        </LocationContainer>
        <OrganizerContainer>
          <Icon name="person" size={14} color="#999" />
          <MeetupOrganizer>Organizador: {meetup.User.name}</MeetupOrganizer>
        </OrganizerContainer>
        <RegisterButton onPress={handleRegister} enabled={!meetup.past}>
          Realizar inscrição
        </RegisterButton>
      </InfoContainer>
    </Container>
  );
}
