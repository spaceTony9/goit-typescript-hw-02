import css from './Loader.module.css';
import { Blocks } from 'react-loader-spinner';
import React from 'react';

function Loader(): React.ReactElement {
  return (
    <div className={css.loaderWrapper}>
      <Blocks
        height="80"
        width="80"
        color="#17a9e3"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
}

export default Loader;
