import {
  BeatLoader,
  GridLoader,
  HashLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
} from 'react-spinners';
import css from './Loaders.module.css';

export const MainLoader = () => {
  return (
    <BeatLoader
      color="rgba(88, 169, 255, 0.9)"
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        padding: '4px',
      }}
      margin={3}
      size={28}
      speedMultiplier={0.8}
    />
  );
};

export const PageLoader = () => {
  return (
    <div className={css.pageLoaderwrapper}>
      <GridLoader
        color="rgba(88, 169, 255, 0.9)"
        margin={3}
        size={28}
        speedMultiplier={0.8}
      />
    </div>
  );
};

export const DeletingContactLoader = () => {
  return (
    <div className={css.deletingContactLoaderwrapper}>
      <PacmanLoader
        // color="rgba(88, 169, 255, 1)"
        color="rgb(221, 44, 38)"
        margin={0}
        size={25}
        speedMultiplier={1}
      />
    </div>
  );
};

export const AddingContactLoader = () => {
  return (
    <div className={css.addingContactLoaderwrapper}>
      <HashLoader
        color="rgb(46, 170, 104)"
        size={50}
        speedMultiplier={1.45}
      />
    </div>
  );
};

export const AuthLoader = () => {
  return (
    <div className={css.authLoaderwrapper}>
      <PropagateLoader
        color="rgb(58, 212, 130)"
        size={25}
        speedMultiplier={1.2}
      />
    </div>
  );
};

export const RefreshingPageLoader = () => {
  return (
    <div className={css.refreshingPageLoaderwrapper}>
      <PuffLoader color="rgb(242, 239, 65)" size={100} />
    </div>
  );
};
