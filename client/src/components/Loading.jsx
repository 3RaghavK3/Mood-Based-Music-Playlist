export function Loading() {
  return (
    <div
      style={{
        display: 'none',
        fontFamily: `'Baloo Thambi 2', system-ui`,
        fontSize: '8rem',
        fontWeight: 1000,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
      }}
    >
      LOADING
    </div>
  );
}
