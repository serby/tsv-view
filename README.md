# TSV View

A simple command-line tool to display TSV (Tab-Separated Values) data in a formatted table.

## Installation

```bash
npm install -g .
```

## Usage

Pipe TSV data to the tool:

```bash
cat data.tsv | tsv-view
echo -e "Name\tAge\tCity\nJohn\t30\tLondon\nJane\t25\tParis" | tsv-view
```

## Features

- Automatically detects headers from first row
- Formats data in a clean table layout
- Limits column width to 20 characters with word wrapping
- Handles standard input for easy piping

## Example

Input:
```
Name	Age	City
John Doe	30	London
Jane Smith	25	Paris
```

Output:
```
┌──────────────────────┬──────────────────────┬──────────────────────┐
│ Name                 │ Age                  │ City                 │
├──────────────────────┼──────────────────────┼──────────────────────┤
│ John Doe             │ 30                   │ London               │
├──────────────────────┼──────────────────────┼──────────────────────┤
│ Jane Smith           │ 25                   │ Paris                │
└──────────────────────┴──────────────────────┴──────────────────────┘
```
