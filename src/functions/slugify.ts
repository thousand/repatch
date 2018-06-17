export default function ( name: string ) {
  return name
    .toLocaleLowerCase()
    .replace( /['"‘“”’«»]/g, '' )
    .replace( /\W+/g, '-' );
}
