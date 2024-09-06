/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';
const OuiIconWsSelector = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path fillRule="evenodd" d="M5.438 2.655a2 2 0 0 0-2.829 2.829c.217.216.544.382.958.496.409.114.866.167 1.305.185a9.903 9.903 0 0 0 1.22-.028 9.834 9.834 0 0 0 .033-1.215A5.82 5.82 0 0 0 5.94 3.62c-.115-.413-.282-.743-.503-.964Zm1.107 3.936.494.074v-.004l.002-.008.004-.03.014-.108c.01-.092.025-.223.038-.384.025-.32.046-.763.027-1.248a6.81 6.81 0 0 0-.22-1.532c-.14-.505-.372-1.015-.759-1.403a3 3 0 1 0-4.243 4.243c.385.384.894.613 1.398.753.507.14 1.047.2 1.53.22a10.9 10.9 0 0 0 1.745-.073l.03-.004h.008l.002-.001h.001l-.071-.495Zm0 0 .071.495.368-.054.055-.367-.494-.074Zm6.728-3.936a2 2 0 0 0-2.828 0c-.213.214-.373.534-.48.937-.106.4-.15.847-.16 1.275a9.361 9.361 0 0 0 .054 1.202 9.645 9.645 0 0 0 1.203.055c.428-.01.875-.054 1.275-.16.403-.107.723-.267.936-.48a2 2 0 0 0 0-2.829Zm-3.859 3.86-.493.084v-.004l-.002-.008-.005-.03a9.692 9.692 0 0 1-.06-.484c-.03-.315-.06-.75-.049-1.228a6.54 6.54 0 0 1 .193-1.51c.133-.498.356-1.003.74-1.387a3 3 0 0 1 4.242 4.243c-.383.384-.889.607-1.387.74a6.555 6.555 0 0 1-1.51.193 10.361 10.361 0 0 1-1.712-.11l-.03-.004-.007-.002H9.33l.084-.493Zm0 0-.084.493-.35-.06-.059-.35.493-.083ZM6.616 8.792l-.071.495.494-.075v.004l.002.009.004.03.014.107c.01.092.025.223.038.384.025.32.046.764.027 1.249a6.81 6.81 0 0 1-.22 1.531c-.14.506-.372 1.016-.759 1.403a3 3 0 0 1-4.243-4.242c.385-.385.894-.614 1.398-.753a6.864 6.864 0 0 1 1.53-.22 10.903 10.903 0 0 1 1.745.072l.03.004.008.001h.003Zm-.071.495.494-.075-.055-.367-.368-.053-.071.495Zm-.452.454a9.93 9.93 0 0 0-1.221-.029 5.907 5.907 0 0 0-1.305.185c-.414.115-.741.28-.958.497a2 2 0 0 0 2.829 2.828c.22-.22.388-.55.503-.964a5.82 5.82 0 0 0 .184-1.303 9.689 9.689 0 0 0-.032-1.214Zm6.5-.794c.498.132 1.004.356 1.387.74a3 3 0 0 1-4.242 4.242c-.384-.383-.607-.889-.74-1.387a6.555 6.555 0 0 1-.193-1.51 10.361 10.361 0 0 1 .11-1.712l.004-.03.001-.008V9.28l.001-.001.493.084-.084-.493h.004l.008-.002.03-.005a9.651 9.651 0 0 1 .484-.06c.315-.031.75-.06 1.228-.05a6.582 6.582 0 0 1 1.509.194Zm-3.179.416L9.33 8.87l-.35.06-.059.349.493.084Zm.445.445a9.645 9.645 0 0 0-.054 1.202c.01.429.054.876.16 1.276.107.403.267.723.48.936a2 2 0 0 0 2.828-2.828c-.213-.214-.533-.373-.936-.48a5.537 5.537 0 0 0-1.275-.16 9.36 9.36 0 0 0-1.203.054Z" />
  </svg>
);
export const icon = OuiIconWsSelector;