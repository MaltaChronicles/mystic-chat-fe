if [ -z "$1" ]; then
    exit 1
fi

input_string="$1"
body="
export default function $input_string() {
    return (
        <h1>$input_string</h1>
    );
}
"

echo "$body" > ./src/components/$input_string.jsx
