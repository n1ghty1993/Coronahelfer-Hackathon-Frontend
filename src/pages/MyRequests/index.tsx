import React, { useState, useEffect, useContext } from 'react';
import { callApi } from '../../api/requests';
import { Auth, IAuthContext } from '../../components/App';
import moment from 'moment';
import './index.scss';

const MyRequests = () => {
  const auth: IAuthContext = useContext(Auth);
  const [requests, setRequests] = useState<any>([]);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await callApi('/request', auth.auth.token as string);

        if (res.error) throw new Error('Error while fetching requests.');
        setRequests(res.result);
      } catch (e) {
        console.log(e);
      }
    };
    run();
  }, [auth.auth.token, reload]);

  return (
    <div className="myrequests">
      <div className="container">
        <h1>MEINE ANZEIGEN</h1>
        {requests.map((e: any, key: number) => (
          <div className="request" key={key}>
            <h2>ANZEIGE</h2>
            <div className="box">
              <h2>{e.title}</h2>
              <p>{e.description}</p>
              <div className="tags">
                <span>{e.category.name}</span>
                <span>bis: {moment(e.time_end).format('DD/MM/YYYY')}</span>
                <span>
                  erstellt: {moment(e.created_at).format('DD/MM/YYYY')}
                </span>
              </div>
            </div>

            <div className="helper">
              {e.confirmed_helper !== null ? (
                <>
                  <h2>IHR HELFER</h2>
                  <div className="entry">
                    <div className="head">
                      <img
                        className="avatar"
                        src={e.confirmed_helper.picture}
                        alt="avatar"
                      />
                      <div className="right">
                        <h2>
                          {e.confirmed_helper.firstName}{' '}
                          {e.confirmed_helper.lastName}
                        </h2>
                      </div>
                    </div>
                    <p>{e.confirmed_helper.offer_text}</p>
                  </div>
                </>
              ) : (
                <>
                  <h2>ANGEBOTE</h2>
                  {e.helper.map((x: any, key: number) => (
                    <Helper
                      key={key}
                      helper={x}
                      requestId={e._id}
                      reload={() => setReload(!reload)}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface IHelper {
  helper: any;
  requestId: string;
  reload: Function;
}

const Helper: React.FC<IHelper> = ({ helper, requestId, reload }) => {
  const auth: IAuthContext = useContext(Auth);

  const accept = async () => {
    try {
      let res = await callApi(
        '/request/helper',
        auth.auth.token as string,
        {
          helperId: helper._id,
          requestId,
        },
        'PUT',
      );

      if (res.error) throw new Error('Error whil confirm helper.');
      reload();
    } catch (e) {
      console.log(e);
    }
  };

  // TODO
  const decline = () => {
    try {
    } catch (e) {}
  };

  return (
    <div className="entry">
      <div className="head">
        <img className="avatar" src={helper.picture} alt="avatar" />
        <div className="right">
          <h2>
            {helper.firstName} {helper.lastName}
          </h2>
          <div className="actions">
            <button className="accept" onClick={accept}>
              Annehmen
            </button>
            <button className="decline" onClick={decline}>
              Ablehnen
            </button>
          </div>
        </div>
      </div>
      <p>{helper.offer_text}</p>
    </div>
  );
};

export default MyRequests;
