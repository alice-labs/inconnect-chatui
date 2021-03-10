import * as React from 'react';

interface Props {
  userType?: 'user' | 'admin' | 'bot';
  consumer?: 'user' | 'admin' | 'bot';
  avatar?: string | React.ReactNode;
  children: React.ReactNode;
}

const AvatarContainer: React.FC<Props> = ({
  userType,
  consumer,
  avatar,
  children,
}) => {
  return avatar ? (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection:
          consumer === 'user'
            ? userType === 'user'
              ? 'row-reverse'
              : 'row'
            : userType === 'user'
            ? 'row'
            : 'row-reverse',
        alignItems: 'flex-start',
        marginBottom: 5,
      }}
    >
      {typeof avatar === 'string' ? (
        <img
          style={
            consumer === 'user'
              ? userType === 'user'
                ? {
                    width: '25px',
                    height: '25px',
                    borderRadius: '50px',
                    objectFit: 'cover',
                    marginLeft: '5px',
                  }
                : {
                    width: '25px',
                    height: '25px',
                    borderRadius: '50px',
                    objectFit: 'cover',
                    marginRight: '5px',
                  }
              : userType === 'user'
              ? {
                  width: '25px',
                  height: '25px',
                  borderRadius: '50px',
                  objectFit: 'cover',
                  marginRight: '5px',
                }
              : {
                  width: '25px',
                  height: '25px',
                  borderRadius: '50px',
                  objectFit: 'cover',
                  marginLeft: '5px',
                }
          }
          src={avatar}
          alt='Avatar'
        />
      ) : (
        <span
          style={{
            width: '25px',
            height: '25px',
            ...(consumer === 'user'
              ? userType === 'user'
                ? { marginLeft: '5px' }
                : { marginRight: '5px' }
              : userType === 'user'
              ? { marginRight: '5px' }
              : { marginLeft: '5px' }),
          }}
        >
          {avatar}
        </span>
      )}
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

export default AvatarContainer;
