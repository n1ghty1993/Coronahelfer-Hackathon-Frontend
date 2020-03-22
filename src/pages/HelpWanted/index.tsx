import React, { FC, useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';

import './style.scss';

import { callApi } from '../../api/requests';

import { Auth, IAuthContext } from '../../components/App';
import Body from '../../components/Body';
import Header from '../../components/Header';
import Request from './components/Request';
import Offer from './components/Offer';

import { IRequest } from './components/Request/types';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const HelpWanted: FC = () => {
  const auth: IAuthContext = useContext(Auth);
  const [selectedRequest, setSelectedRequest] = useState<string | null>();
  const [requests, setRequests] = useState<Array<IRequest>>([]);

  Modal.setAppElement('#modal-root');

  const openModal = (requestId: string) => {
    setSelectedRequest(requestId);
  };

  const closeModal = () => {
    setSelectedRequest(null);
  };

  useEffect(() => {
    const fetchRequests = async () => {
      const result = await callApi('/publicRequest', auth.auth.token as string);

      setRequests(result.result);
    };

    try {
      fetchRequests();
    } catch (err) {
      console.log(err);
    }
  }, [auth]);

  return (
    <div className="RequestPage">
      <Header>
        <h1>Gesuche</h1>
      </Header>
      <Body>
        {requests.map((request, idx) => (
          <Request
            key={request.title + idx}
            user={undefined}
            request={request}
            onClick={openModal}
          />
        ))}
        {!requests.length && <article>Momentan gibt es keine Gesuche!</article>}
        <div>
          <Modal
            isOpen={!!selectedRequest}
            onRequestClose={closeModal}
            style={modalStyles}
            className="Modal"
            overlayClassName="Overlay"
            contentLabel="Modal Window"
          >
            <button onClick={closeModal} className="close-modal">
              X
            </button>
            {selectedRequest && <Offer requestId={selectedRequest} />}
          </Modal>
        </div>
      </Body>
    </div>
  );
};

export default HelpWanted;
