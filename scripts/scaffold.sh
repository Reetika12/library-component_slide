#!/bin/bash

echo "Enter the new component name"
read name
echo "Creating $name folder structure"

base="src/$name"

mkdir $base
mkdir "$base/__tests__"

# index file structure
echo "creating index file"
filename="$base/index.tsx"
touch $filename

echo "import React from 'react';" >>$filename
echo "import clsx from 'clsx';" >>$filename
echo "" >>$filename
echo "import './$name.scss';" >>$filename
echo "" >>$filename
echo "export interface I${name}Props {}" >>$filename
echo "" >>$filename

echo "export default function ${name}(props: I${name}Props): JSX.Element {" >>$filename
echo "	const {} = props;" >>$filename
echo "" >>$filename
echo "	return <div className='$name'>${name}</div>;" >>$filename
echo "}" >>$filename
echo "" >>$filename
echo "${name}.defaultProps = {};" >>$filename

echo "creating test file"
testfile="$base/__tests__/$name.test.tsx"
touch $testfile

echo "import * as React from 'react';" >>$testfile
echo "import { shallow } from 'enzyme';" >>$testfile
echo "" >>$testfile
echo "import $name from '../index';" >>$testfile
echo "" >>$testfile
echo "describe('${name}', function test() {" >>$testfile
echo "	it('should render correctly', () => {" >>$testfile
echo "		const component = shallow(<${name} />);" >>$testfile
echo "" >>$testfile
echo "		expect(component).toMatchSnapshot();" >>$testfile
echo "	});" >>$testfile
echo "});" >>$testfile

scssfile="$base/${name}.scss"
touch $scssfile
echo "@import 'src/Assets/variables/index';" >>$scssfile
echo "" >>$scssfile
echo ".$name {" >>$scssfile
echo "}" >>$scssfile

echo "Creating story file"
storyfile="$base/${name}.stories.tsx"
touch $storyfile

echo "import React from 'react';" >>$storyfile
echo "import { Story, Meta } from '@storybook/react';" >>$storyfile
echo "" >>$storyfile
echo "import $name, { I${name}Props } from './index';" >>$storyfile
echo "" >>$storyfile
echo "export default {" >>$storyfile
echo "	title: '$name'," >>$storyfile
echo "	component: $name," >>$storyfile
echo "} as Meta;" >>$storyfile
echo "" >>$storyfile
echo "const Template: Story<I${name}Props> = (args) => <$name {...args} />;" >>$storyfile
echo "" >>$storyfile
echo "const commonProps = {};" >>$storyfile
echo "" >>$storyfile
echo "export const Basic = Template.bind({});" >>$storyfile
echo "Basic.args = {" >>$storyfile
echo "	...commonProps," >>$storyfile
echo "};" >>$storyfile
echo "" >>$storyfile
echo "Basic.storyName = 'Basic';" >>$storyfile

echo "Adding $name to index.js"

echo "export { default as $name } from './$name';" >>"src/index.js"

echo "Your $name component successfully initialized"

exit
