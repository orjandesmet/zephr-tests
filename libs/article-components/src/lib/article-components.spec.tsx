import { render } from '@testing-library/react';

import ArticleComponents from './article-components';

describe('ArticleComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleComponents />);
    expect(baseElement).toBeTruthy();
  });
});
